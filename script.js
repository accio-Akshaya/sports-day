function OpeningCeremony(callback) {
    console.log("🏁 Sports Day has started!");
    
    let score = { red: 0, blue: 0, green: 0, yellow: 0 };
    console.log("Initial Scores:", score);

    setTimeout(() => {
        console.log("🎉 Opening Ceremony Complete. Starting the Race...");
        callback(score, Race100M);
    }, 1000);
}

function Race100M(score, callback) {
    console.log("🏃‍♂️ 100m Race started!");

    let times = {
        red: Math.floor(Math.random() * 6) + 10,   
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10
    };

    console.log("Race Times:", times);

    let sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
    let [winner, second] = [sorted[0][0], sorted[1][0]];

    score[winner] += 50;
    score[second] += 25;

    console.log("🏆 100m Race Winner:", winner);
    console.log("Updated Scores:", score);

    console.log("callback value:", callback); 

    if (typeof callback === "function") {
        setTimeout(() => callback(score, LongJump), 3000);
    } else {
        console.error("❌ Error: callback is not a function!", callback);
    }
}

function LongJump(score, callback) {
    console.log("🤾‍♂️ Long Jump started!");

    let colors = Object.keys(score);
    let chosenColor = colors[Math.floor(Math.random() * colors.length)];

    score[chosenColor] += 100;
    
    console.log("🎨 Long Jump Winner:", chosenColor);
    console.log("Updated Scores:", score);

    if (typeof callback === "function") {
        setTimeout(() => callback(score, HighJump), 2000);
    } else {
        console.error("❌ Error: callback is not a function!", callback);
    }
}

function HighJump(score, callback) {
    console.log("🦘 High Jump started!");

    let userChoice = prompt("Enter the color of the player who performed the highest jump (red, blue, green, yellow):");

    if (userChoice && score[userChoice] !== undefined) {
        score[userChoice] += 50;
        console.log("🎯 High Jump Winner:", userChoice);
    } else {
        console.log("❌ No input or invalid color. No points awarded.");
    }

    console.log("Updated Scores:", score);

    
    setTimeout(() => AwardCeremony(score), 1000);
}

function AwardCeremony(score) {
    console.log("🏅 Award Ceremony Time!");

    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    
    console.log(`🥇 1st Place: ${sortedScores[0][0]} with ${sortedScores[0][1]} points`);
    console.log(`🥈 2nd Place: ${sortedScores[1][0]} with ${sortedScores[1][1]} points`);
    console.log(`🥉 3rd Place: ${sortedScores[2][0]} with ${sortedScores[2][1]} points`);
    console.log("🎊 Congratulations to all participants!");
}


OpeningCeremony((score) => Race100M(score, LongJump));
