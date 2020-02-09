let users = [
    {
        name: "Ahmed",
        photo: "https://specials-images.forbesimg.com/imageserve/5e247ce9735f8c00079a3047/960x0.jpg",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        name: "Jacob Deming",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [2, 3, 4, 4, 1, 5, 5, 2, 2, 1]
    },
    {
        name: "Jeremiah Scanlon",
        photo: "https://us.123rf.com/450wm/rh2010/rh20101901/rh2010190100859/116442253-man-winding-bandage-on-the-wrists-preparring-for-boxing-close-up-view-with-no-face.jpg?ver=6",
        scores: [2, 3, 4, 4, 1, 5, 5, 3, 5, 1]
    },
    {
        name: "Charly",
        photo: "https://media1.popsugar-assets.com/files/thumbor/1eRDtxzSY4tw8qyReHtZ51PbhZ8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/06/19/639/n/1922283/cb4379b5c015e6dc_MCDCHAN_EC125_1_/i/Charlie-Chocolate-Factory.jpg",
        scores: [2, 3, 1, 1, 1, 5, 5, 1, 1, 1]
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