muscleUrl = "http://localhost:3000/workouts/"

const currentWorkout = document.querySelector('#currentWorkout')

fetch(muscleUrl)
.then(response => response.json())
.then(workoutArray => {
    workoutArray.forEach(workoutObject => {
        console.log(workoutObject) 

        currentWorkout.innerHTML = 
        `<br><h1>Your current workouts: ${workoutObject.typeOf}</h1><br>
        <span>Lifting at current weight: ${workoutObject.weight} lbs</span><br>
        <br><span>Current number of Sets: ${workoutObject.set} sets</span><br>
        <br><span>Current reps: ${workoutObject.reps} reps</span>`
    
    })
})