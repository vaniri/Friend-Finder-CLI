const maxScore = 5;

let users = [
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        name: "Jacob Deming",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [2, 3, 4, 4, 1, 5, 5, 2, 2, 1]
    },
    {
        name: "Jeremiah Scanlon",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [2, 3, 4, 4, 1, 5, 5, 3, 5, 1]
    }
];

function storeUser(userData) {
    users.push(userData);
}

function getAllUsers() {
    return users;
}

function findMatch(curUser) {
    let minDiffer = userDiffer(curUser, users[0]);
    let minUserIdx = 0;
    for (let j = 1; j < users.length; j++) {
        let differ = userDiffer(curUser, users[j]);
        if (minDiffer > differ) {
            minDiffer = differ;
            minUserIdx = j;
        }
    }
    
    return users[minUserIdx];
}

function userDiffer(user1, user2) {
    let differ = 0;
    for (let i = 0; i < user1.scores.length; i++) {
        differ += Math.abs(user1.scores[i] - user2.scores[i]);
    }

    return differ;
}

module.exports = { storeUser, getAllUsers, findMatch };