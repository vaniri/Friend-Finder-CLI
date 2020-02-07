let users = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": ["1", "3", "6", "2", "5", "2", "3", "1", "2", "1"]
    },
    {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        "scores": ["2", "3", "4", "4", "1", "5", "5", "2", "2", "1"]
    }
];

function storeUser(userData) {
    users.push(userData);
}

function getAllUsers() {
    return users;
}

module.exports = { storeUser, getAllUsers };