function solution(table, languages, preference) {
    let max = 0;
    const answers = table.reduce((maxJobs, str) => {
        let inputs = str.split(" ");
        const job = inputs.shift();
        const sum = languages.reduce((acc, lang, idx) => {
            const i = inputs.indexOf(lang);
            const score = (i < 0) ? 0 : 5-i;
            return acc + score * preference[idx];
        }, 0);

        if (sum > max) {
            max = sum;
            return [job];
        } else if (sum === max) maxJobs.push(job);
        return maxJobs
    }, []).sort();
    return answers[0];
}

solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["PYTHON", "C++", "SQL"], [7, 5, 5])