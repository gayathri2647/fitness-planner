// Global Variables
let selectedGoal = null;
let selectedLevel = null;
let currentWorkout = null;
let currentExerciseIndex = 0;
let completedExercises = [];
let timerInterval = null;
let timerRunning = false;
let timerSeconds = 0;
let reminderInterval = null;
let workoutHistory = [];
let currentWeekOffset = 0;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    initApp();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load workout history from localStorage
    loadWorkoutHistory();
    
    // Start reminder system
    startReminderSystem();
});

// Initialize the application
function initApp() {
    // Set the current date in the calendar
    updateCalendarDate();
    
    // Generate calendar days
    generateCalendarDays();
}

// Set up event listeners for user interactions
function setupEventListeners() {
    // Goal selection
    const goalCards = document.querySelectorAll('.goal-card');
    goalCards.forEach(card => {
        card.addEventListener('click', () => {
            selectGoal(card);
        });
    });
    
    // Level selection
    const levelButtons = document.querySelectorAll('.level-btn');
    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectLevel(button);
        });
    });
    
    // Generate routine button
    document.getElementById('generate-btn').addEventListener('click', generateRoutine);
    
    // Back button
    document.getElementById('back-btn').addEventListener('click', goBack);
    
    // Timer controls
    document.getElementById('start-timer').addEventListener('click', startTimer);
    document.getElementById('pause-timer').addEventListener('click', pauseTimer);
    document.getElementById('reset-timer').addEventListener('click', resetTimer);
    
    // BMI calculator
    document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);
    
    // Navigation tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            navigateToSection(tab.dataset.tab);
        });
    });
    
    // Calendar navigation
    document.getElementById('prev-week').addEventListener('click', () => navigateCalendar(-1));
    document.getElementById('next-week').addEventListener('click', () => navigateCalendar(1));
    
    // Close reminder popup
    document.getElementById('close-reminder').addEventListener('click', closeReminder);
}

// Select a fitness goal
function selectGoal(card) {
    // Remove selected class from all cards
    document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('selected'));
    
    // Add selected class to clicked card
    card.classList.add('selected');
    
    // Store the selected goal
    selectedGoal = card.dataset.goal;
}

// Select a fitness level
function selectLevel(button) {
    // Remove selected class from all buttons
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
    
    // Add selected class to clicked button
    button.classList.add('selected');
    
    // Store the selected level
    selectedLevel = button.dataset.level;
}

// Generate workout routine based on selected goal and level
function generateRoutine() {
    // Check if goal and level are selected
    if (!selectedGoal || !selectedLevel) {
        alert('Please select both a fitness goal and level before generating a routine.');
        return;
    }
    
    // Get the workout data for the selected goal and level
    currentWorkout = workoutData[selectedGoal][selectedLevel];
    
    // Reset completed exercises
    completedExercises = [];
    
    // Update the routine title
    document.getElementById('routine-title').textContent = currentWorkout.name;
    
    // Populate the exercises list
    populateExercises();
    
    // Reset the progress bar
    updateProgress();
    
    // Navigate to the routine display section
    navigateToSection('routine-display');
}

// Populate the exercises list with the current workout
function populateExercises() {
    const exercisesList = document.getElementById('exercises-list');
    exercisesList.innerHTML = '';
    
    // Get the first day of the workout
    const day = currentWorkout.days[0];
    
    // Update the current day display
    document.getElementById('current-day').textContent = day.day + ': ' + day.focus;
    
    // Add each exercise to the list
    day.exercises.forEach((exercise, index) => {
        const exerciseItem = document.createElement('div');
        exerciseItem.className = 'exercise-item';
        exerciseItem.dataset.index = index;
        
        // Check if exercise is completed
        if (completedExercises.includes(index)) {
            exerciseItem.classList.add('completed');
        }
        
        // Create exercise info
        const exerciseInfo = document.createElement('div');
        exerciseInfo.className = 'exercise-info';
        
        const exerciseName = document.createElement('div');
        exerciseName.className = 'exercise-name';
        exerciseName.textContent = exercise.name;
        
        const exerciseDetails = document.createElement('div');
        exerciseDetails.className = 'exercise-details';
        
        // Display either duration or reps/sets
        if (exercise.duration) {
            exerciseDetails.textContent = `Duration: ${exercise.duration}`;
        } else {
            exerciseDetails.textContent = `${exercise.reps} reps × ${exercise.sets} sets`;
        }
        
        // Add instructions
        const exerciseInstructions = document.createElement('div');
        exerciseInstructions.className = 'exercise-instructions';
        exerciseInstructions.textContent = exercise.instructions;
        
        // Add to exercise info
        exerciseInfo.appendChild(exerciseName);
        exerciseInfo.appendChild(exerciseDetails);
        exerciseInfo.appendChild(exerciseInstructions);
        
        // Create exercise actions
        const exerciseActions = document.createElement('div');
        exerciseActions.className = 'exercise-actions';
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'exercise-btn complete-btn';
        completeBtn.textContent = completedExercises.includes(index) ? 'Completed' : 'Complete';
        completeBtn.addEventListener('click', () => completeExercise(index));
        
        // Add to exercise actions
        exerciseActions.appendChild(completeBtn);
        
        // Add to exercise item
        exerciseItem.appendChild(exerciseInfo);
        exerciseItem.appendChild(exerciseActions);
        
        // Add to exercises list
        exercisesList.appendChild(exerciseItem);
    });
}

// Mark an exercise as completed
function completeExercise(index) {
    // Toggle completion status
    const exerciseIndex = completedExercises.indexOf(index);
    if (exerciseIndex === -1) {
        // Add to completed exercises
        completedExercises.push(index);
    } else {
        // Remove from completed exercises
        completedExercises.splice(exerciseIndex, 1);
    }
    
    // Update the UI
    const exerciseItem = document.querySelector(`.exercise-item[data-index="${index}"]`);
    if (exerciseItem) {
        exerciseItem.classList.toggle('completed');
        
        const completeBtn = exerciseItem.querySelector('.complete-btn');
        if (completeBtn) {
            completeBtn.textContent = completedExercises.includes(index) ? 'Completed' : 'Complete';
        }
    }
    
    // Update progress
    updateProgress();
}

// Update the progress bar
function updateProgress() {
    if (!currentWorkout) return;
    
    const day = currentWorkout.days[0];
    const totalExercises = day.exercises.length;
    const completedCount = completedExercises.length;
    const progressPercent = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;
    
    // Update progress text
    document.getElementById('progress-percent').textContent = `${progressPercent}%`;
    
    // Update progress bar
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}

// Go back to goal selection
function goBack() {
    navigateToSection('goal-selection');
}