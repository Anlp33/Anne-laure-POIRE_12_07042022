export const urlAPI = {

    userMainData(id) {
        return `http://localhost:3000/user/${id}`;
    },
    userActivity(id) {
        return `http://localhost:3000/user/${id}/activity`;
    },
    userPerformance(id) {
        return `http://localhost:3000/user/${id}/performance`;
    },
    userAverageSession(id) {
        return `http://localhost:3000/user/${id}/average-sessions`;
    },
};
