// Workout Data for Different Goals and Levels
const workoutData = {
    "weight-loss": {
        "beginner": {
            name: "Beginner Weight Loss Program",
            description: "A gentle introduction to cardio exercises for weight loss",
            days: [
                {
                    day: "Day 1",
                    focus: "Light Cardio",
                    exercises: [
                        { name: "Brisk Walking", duration: "20 mins", reps: null, sets: null, instructions: "Maintain a pace where you can still talk but feel slightly breathless" },
                        { name: "Jumping Jacks", duration: "5 mins", reps: null, sets: null, instructions: "Do as many as you can in 5 minutes, take breaks as needed" },
                        { name: "Marching in Place", duration: "10 mins", reps: null, sets: null, instructions: "Lift knees high and swing arms" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Rest & Stretching",
                    exercises: [
                        { name: "Full Body Stretch", duration: "15 mins", reps: null, sets: null, instructions: "Focus on major muscle groups, hold each stretch for 30 seconds" },
                        { name: "Light Walking", duration: "10 mins", reps: null, sets: null, instructions: "Just to keep the body moving" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Cardio & Core",
                    exercises: [
                        { name: "Brisk Walking", duration: "15 mins", reps: null, sets: null, instructions: "Slightly faster pace than Day 1" },
                        { name: "Modified Push-ups", duration: null, reps: 8, sets: 2, instructions: "On knees if needed" },
                        { name: "Crunches", duration: null, reps: 10, sets: 2, instructions: "Focus on form rather than speed" }
                    ]
                }
            ]
        },
        "intermediate": {
            name: "Intermediate Weight Loss Program",
            description: "A balanced mix of cardio and light resistance training",
            days: [
                {
                    day: "Day 1",
                    focus: "Cardio Intervals",
                    exercises: [
                        { name: "Jogging", duration: "5 mins", reps: null, sets: null, instructions: "Warm-up pace" },
                        { name: "Sprint Intervals", duration: "15 mins", reps: null, sets: null, instructions: "30 seconds sprint, 90 seconds walk - repeat" },
                        { name: "Jumping Jacks", duration: null, reps: 50, sets: 3, instructions: "30 seconds rest between sets" },
                        { name: "Cool Down Walk", duration: "5 mins", reps: null, sets: null, instructions: "Slow pace" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Strength & Core",
                    exercises: [
                        { name: "Push-ups", duration: null, reps: 12, sets: 3, instructions: "Full push-ups or modified" },
                        { name: "Bodyweight Squats", duration: null, reps: 15, sets: 3, instructions: "Keep knees behind toes" },
                        { name: "Plank", duration: "30 secs", reps: null, sets: 3, instructions: "Rest 30 seconds between sets" },
                        { name: "Mountain Climbers", duration: "45 secs", reps: null, sets: 3, instructions: "As fast as possible while maintaining form" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Rest & Active Recovery",
                    exercises: [
                        { name: "Yoga Flow", duration: "20 mins", reps: null, sets: null, instructions: "Focus on deep breathing" },
                        { name: "Light Walking", duration: "15 mins", reps: null, sets: null, instructions: "Outdoor if possible" }
                    ]
                },
                {
                    day: "Day 4",
                    focus: "HIIT Training",
                    exercises: [
                        { name: "Burpees", duration: null, reps: 10, sets: 3, instructions: "Modify if needed" },
                        { name: "High Knees", duration: "45 secs", reps: null, sets: 3, instructions: "As fast as possible" },
                        { name: "Squat Jumps", duration: null, reps: 12, sets: 3, instructions: "Land softly" },
                        { name: "Plank Jacks", duration: "45 secs", reps: null, sets: 3, instructions: "Keep hips stable" }
                    ]
                }
            ]
        },
        "advanced": {
            name: "Advanced Weight Loss Program",
            description: "High-intensity cardio and circuit training for maximum calorie burn",
            days: [
                {
                    day: "Day 1",
                    focus: "HIIT Cardio",
                    exercises: [
                        { name: "Warm-up Jog", duration: "5 mins", reps: null, sets: null, instructions: "Light pace" },
                        { name: "Burpee Intervals", duration: null, reps: 15, sets: 4, instructions: "30 seconds rest between sets" },
                        { name: "Mountain Climbers", duration: "60 secs", reps: null, sets: 4, instructions: "Maximum speed" },
                        { name: "Jump Squats", duration: null, reps: 20, sets: 4, instructions: "Explode upward" },
                        { name: "Cool Down", duration: "5 mins", reps: null, sets: null, instructions: "Light stretching" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Strength Circuit",
                    exercises: [
                        { name: "Push-ups", duration: null, reps: 20, sets: 4, instructions: "Vary hand positions each set" },
                        { name: "Bodyweight Lunges", duration: null, reps: 15, sets: 4, instructions: "Each leg" },
                        { name: "Plank", duration: "90 secs", reps: null, sets: 3, instructions: "Mix with side planks" },
                        { name: "Burpees", duration: null, reps: 15, sets: 3, instructions: "Full range of motion" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Active Recovery",
                    exercises: [
                        { name: "Swimming or Cycling", duration: "30 mins", reps: null, sets: null, instructions: "Moderate pace" },
                        { name: "Yoga", duration: "20 mins", reps: null, sets: null, instructions: "Focus on flexibility" }
                    ]
                },
                {
                    day: "Day 4",
                    focus: "Tabata Training",
                    exercises: [
                        { name: "Jumping Jacks", duration: "4 mins", reps: null, sets: null, instructions: "20 secs work, 10 secs rest - repeat 8 times" },
                        { name: "Mountain Climbers", duration: "4 mins", reps: null, sets: null, instructions: "20 secs work, 10 secs rest - repeat 8 times" },
                        { name: "High Knees", duration: "4 mins", reps: null, sets: null, instructions: "20 secs work, 10 secs rest - repeat 8 times" },
                        { name: "Burpees", duration: "4 mins", reps: null, sets: null, instructions: "20 secs work, 10 secs rest - repeat 8 times" }
                    ]
                },
                {
                    day: "Day 5",
                    focus: "Endurance Training",
                    exercises: [
                        { name: "Running", duration: "30 mins", reps: null, sets: null, instructions: "Steady pace" },
                        { name: "Circuit Training", duration: "20 mins", reps: null, sets: null, instructions: "Minimal rest between exercises" }
                    ]
                }
            ]
        }
    },
    "muscle-gain": {
        "beginner": {
            name: "Beginner Muscle Building Program",
            description: "Introduction to strength training with focus on form",
            days: [
                {
                    day: "Day 1",
                    focus: "Upper Body",
                    exercises: [
                        { name: "Push-ups", duration: null, reps: 8, sets: 3, instructions: "Modified if needed, focus on form" },
                        { name: "Dumbbell Rows", duration: null, reps: 10, sets: 3, instructions: "Use light weights or household items" },
                        { name: "Shoulder Press", duration: null, reps: 8, sets: 3, instructions: "Use light weights or household items" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Rest Day",
                    exercises: [
                        { name: "Light Walking", duration: "15 mins", reps: null, sets: null, instructions: "Active recovery" },
                        { name: "Upper Body Stretching", duration: "10 mins", reps: null, sets: null, instructions: "Focus on chest and back" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Lower Body",
                    exercises: [
                        { name: "Bodyweight Squats", duration: null, reps: 12, sets: 3, instructions: "Focus on depth and form" },
                        { name: "Lunges", duration: null, reps: 10, sets: 2, instructions: "Each leg" },
                        { name: "Calf Raises", duration: null, reps: 15, sets: 3, instructions: "Use a step if available" }
                    ]
                }
            ]
        },
        "intermediate": {
            name: "Intermediate Muscle Building Program",
            description: "Progressive overload with compound movements",
            days: [
                {
                    day: "Day 1",
                    focus: "Chest & Triceps",
                    exercises: [
                        { name: "Push-ups (Various Types)", duration: null, reps: 12, sets: 4, instructions: "Standard, wide, diamond" },
                        { name: "Dips", duration: null, reps: 10, sets: 3, instructions: "Use chairs or stable surfaces" },
                        { name: "Tricep Extensions", duration: null, reps: 12, sets: 3, instructions: "Use household items if no weights" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Back & Biceps",
                    exercises: [
                        { name: "Pull-ups/Chin-ups", duration: null, reps: 8, sets: 3, instructions: "Assisted if needed" },
                        { name: "Dumbbell Rows", duration: null, reps: 12, sets: 3, instructions: "Moderate weight" },
                        { name: "Bicep Curls", duration: null, reps: 12, sets: 3, instructions: "Focus on controlled movement" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Rest & Recovery",
                    exercises: [
                        { name: "Light Cardio", duration: "20 mins", reps: null, sets: null, instructions: "Walking or cycling" },
                        { name: "Full Body Stretching", duration: "15 mins", reps: null, sets: null, instructions: "Hold each stretch for 30 seconds" }
                    ]
                },
                {
                    day: "Day 4",
                    focus: "Legs & Shoulders",
                    exercises: [
                        { name: "Squats", duration: null, reps: 15, sets: 4, instructions: "Add weights if possible" },
                        { name: "Lunges", duration: null, reps: 12, sets: 3, instructions: "Each leg, walking lunges if space allows" },
                        { name: "Shoulder Press", duration: null, reps: 12, sets: 3, instructions: "Use weights or resistance bands" }
                    ]
                }
            ]
        },
        "advanced": {
            name: "Advanced Muscle Building Program",
            description: "High-volume training split for maximum muscle growth",
            days: [
                {
                    day: "Day 1",
                    focus: "Chest & Triceps",
                    exercises: [
                        { name: "Weighted Push-ups", duration: null, reps: 15, sets: 4, instructions: "Add weight on back if possible" },
                        { name: "Decline Push-ups", duration: null, reps: 12, sets: 4, instructions: "Feet elevated" },
                        { name: "Dips", duration: null, reps: 15, sets: 4, instructions: "Weighted if possible" },
                        { name: "Diamond Push-ups", duration: null, reps: 12, sets: 3, instructions: "Hands close together" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Back & Biceps",
                    exercises: [
                        { name: "Pull-ups (Various Grips)", duration: null, reps: 12, sets: 4, instructions: "Wide, close, neutral grip" },
                        { name: "Inverted Rows", duration: null, reps: 15, sets: 4, instructions: "Elevate feet for more difficulty" },
                        { name: "Bicep Curls", duration: null, reps: 15, sets: 4, instructions: "Slow eccentric phase" },
                        { name: "Chin-ups", duration: null, reps: 10, sets: 3, instructions: "Supinated grip" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Active Recovery",
                    exercises: [
                        { name: "Swimming or Cycling", duration: "25 mins", reps: null, sets: null, instructions: "Moderate intensity" },
                        { name: "Foam Rolling", duration: "15 mins", reps: null, sets: null, instructions: "Focus on tight areas" }
                    ]
                },
                {
                    day: "Day 4",
                    focus: "Legs",
                    exercises: [
                        { name: "Weighted Squats", duration: null, reps: 15, sets: 5, instructions: "Heavy weight, full depth" },
                        { name: "Walking Lunges", duration: null, reps: 20, sets: 4, instructions: "Each leg, add weights if possible" },
                        { name: "Jump Squats", duration: null, reps: 15, sets: 3, instructions: "Explosive movement" },
                        { name: "Calf Raises", duration: null, reps: 20, sets: 4, instructions: "Single leg for more difficulty" }
                    ]
                },
                {
                    day: "Day 5",
                    focus: "Shoulders & Core",
                    exercises: [
                        { name: "Pike Push-ups", duration: null, reps: 12, sets: 4, instructions: "Progress toward handstand push-ups" },
                        { name: "Lateral Raises", duration: null, reps: 15, sets: 4, instructions: "Use water bottles if no weights" },
                        { name: "Plank Variations", duration: "60 secs", reps: null, sets: 4, instructions: "Standard, side, one-arm" },
                        { name: "Russian Twists", duration: null, reps: 20, sets: 3, instructions: "Add weight if possible" }
                    ]
                }
            ]
        }
    },
    "flexibility": {
        "beginner": {
            name: "Beginner Flexibility Program",
            description: "Basic stretches to improve overall mobility",
            days: [
                {
                    day: "Day 1",
                    focus: "Upper Body Flexibility",
                    exercises: [
                        { name: "Neck Stretches", duration: "5 mins", reps: null, sets: null, instructions: "Gentle movements in all directions" },
                        { name: "Shoulder Rolls", duration: null, reps: 10, sets: 2, instructions: "Forward and backward" },
                        { name: "Chest Stretch", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds each" },
                        { name: "Tricep Stretch", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds each arm" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Lower Body Flexibility",
                    exercises: [
                        { name: "Standing Quad Stretch", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds each leg" },
                        { name: "Hamstring Stretch", duration: null, reps: null, sets: 3, instructions: "Seated, reach for toes, hold 30 seconds" },
                        { name: "Calf Stretch", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds each leg" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Full Body Stretch",
                    exercises: [
                        { name: "Cat-Cow Stretch", duration: null, reps: 10, sets: 2, instructions: "Flow between positions" },
                        { name: "Child's Pose", duration: null, reps: null, sets: 3, instructions: "Hold for 45 seconds" },
                        { name: "Butterfly Stretch", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds" },
                        { name: "Side Bends", duration: null, reps: 10, sets: 2, instructions: "Each side" }
                    ]
                }
            ]
        },
        "intermediate": {
            name: "Intermediate Flexibility Program",
            description: "Deeper stretches for improved range of motion",
            days: [
                {
                    day: "Day 1",
                    focus: "Dynamic Stretching",
                    exercises: [
                        { name: "Arm Circles", duration: null, reps: 15, sets: 2, instructions: "Small to large circles" },
                        { name: "Hip Circles", duration: null, reps: 10, sets: 2, instructions: "Each direction" },
                        { name: "Walking Lunges with Twist", duration: null, reps: 10, sets: 2, instructions: "Each leg" },
                        { name: "Leg Swings", duration: null, reps: 12, sets: 2, instructions: "Forward/back and side to side" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Static Stretching",
                    exercises: [
                        { name: "Pigeon Pose", duration: null, reps: null, sets: 3, instructions: "Hold for 45 seconds each side" },
                        { name: "Seated Forward Fold", duration: null, reps: null, sets: 3, instructions: "Hold for 60 seconds" },
                        { name: "Lying Spinal Twist", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds each side" },
                        { name: "Cobra Stretch", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Yoga Flow",
                    exercises: [
                        { name: "Sun Salutation", duration: null, reps: 5, sets: 2, instructions: "Complete flow" },
                        { name: "Warrior Poses", duration: null, reps: null, sets: 3, instructions: "Hold each pose for 30 seconds" },
                        { name: "Downward Dog", duration: null, reps: null, sets: 3, instructions: "Hold for 45 seconds" }
                    ]
                },
                {
                    day: "Day 4",
                    focus: "Recovery & Mobility",
                    exercises: [
                        { name: "Foam Rolling", duration: "10 mins", reps: null, sets: null, instructions: "Focus on tight areas" },
                        { name: "Joint Rotations", duration: "5 mins", reps: null, sets: null, instructions: "All major joints" },
                        { name: "Gentle Stretching", duration: "10 mins", reps: null, sets: null, instructions: "Full body" }
                    ]
                }
            ]
        },
        "advanced": {
            name: "Advanced Flexibility Program",
            description: "Advanced stretches and mobility work for maximum flexibility",
            days: [
                {
                    day: "Day 1",
                    focus: "Deep Stretching",
                    exercises: [
                        { name: "Split Training", duration: null, reps: null, sets: 4, instructions: "Hold for 60 seconds each side" },
                        { name: "Advanced Hamstring Stretch", duration: null, reps: null, sets: 3, instructions: "With resistance band if available" },
                        { name: "Bridge Pose", duration: null, reps: null, sets: 3, instructions: "Hold for 45 seconds" },
                        { name: "Shoulder Stretch with Strap", duration: null, reps: null, sets: 3, instructions: "Hold for 45 seconds each position" }
                    ]
                },
                {
                    day: "Day 2",
                    focus: "Dynamic Flexibility",
                    exercises: [
                        { name: "Flow Yoga Sequence", duration: "20 mins", reps: null, sets: null, instructions: "Continuous movement" },
                        { name: "Controlled Leg Raises", duration: null, reps: 15, sets: 3, instructions: "All directions" },
                        { name: "Dynamic Twists", duration: null, reps: 15, sets: 3, instructions: "Standing and seated variations" }
                    ]
                },
                {
                    day: "Day 3",
                    focus: "Active Recovery",
                    exercises: [
                        { name: "Light Cardio", duration: "15 mins", reps: null, sets: null, instructions: "Walking or swimming" },
                        { name: "Self-Myofascial Release", duration: "15 mins", reps: null, sets: null, instructions: "Using foam roller or massage ball" }
                    ]
                },
                {
                    day: "Day 4",
                    focus: "Advanced Poses",
                    exercises: [
                        { name: "Advanced Backbends", duration: null, reps: null, sets: 3, instructions: "Hold for 30 seconds each" },
                        { name: "Arm Balances Practice", duration: "15 mins", reps: null, sets: null, instructions: "Crow pose and variations" },
                        { name: "Inversions Practice", duration: "15 mins", reps: null, sets: null, instructions: "Headstand or handstand practice against wall" }
                    ]
                },
                {
                    day: "Day 5",
                    focus: "Full Body Integration",
                    exercises: [
                        { name: "Advanced Yoga Flow", duration: "30 mins", reps: null, sets: null, instructions: "Continuous sequence" },
                        { name: "Partner Stretching", duration: "15 mins", reps: null, sets: null, instructions: "If available" },
                        { name: "Relaxation & Breathing", duration: "10 mins", reps: null, sets: null, instructions: "Deep breathing in stretched positions" }
                    ]
                }
            ]
        }
    }
};

// BMI Categories and Recommendations
const bmiData = {
    categories: [
        { range: [0, 18.5], name: "Underweight", color: "#FFD700", recommendation: "Consider focusing on muscle gain routines and increasing caloric intake with nutrient-dense foods." },
        { range: [18.5, 24.9], name: "Normal weight", color: "#32CD32", recommendation: "Maintain your healthy weight with balanced routines focusing on your specific fitness goals." },
        { range: [25, 29.9], name: "Overweight", color: "#FF8C00", recommendation: "Consider weight loss routines combined with strength training to build muscle while losing fat." },
        { range: [30, 34.9], name: "Obesity (Class 1)", color: "#FF4500", recommendation: "Focus on beginner weight loss routines with low-impact exercises and gradual progression." },
        { range: [35, 39.9], name: "Obesity (Class 2)", color: "#FF0000", recommendation: "Begin with very gentle exercise routines and consider consulting a healthcare professional." },
        { range: [40, 100], name: "Obesity (Class 3)", color: "#8B0000", recommendation: "Please consult with a healthcare professional before beginning any exercise program." }
    ]
};

// Reminder Messages
const reminderMessages = [
    { title: "Hydration Reminder", message: "Don't forget to drink water! Aim for at least 8 glasses per day." },
    { title: "Posture Check", message: "Take a moment to check your posture. Straighten your back and relax your shoulders." },
    { title: "Rest Reminder", message: "Remember that rest days are important! They help your muscles recover and grow stronger." },
    { title: "Breathing Technique", message: "Focus on your breathing during exercises. Exhale during exertion and inhale during relaxation." },
    { title: "Consistency Tip", message: "Consistency is key to seeing results. Try to stick to your routine even on days you don't feel motivated." },
    { title: "Form Check", message: "Quality over quantity! Make sure your form is correct before increasing weight or reps." }
];