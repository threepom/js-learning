function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

let students = {
    js: [
        {
            name: 'John',
            progress: 100
        },
        {
            name: 'Ivan',
            progress: 60
        }
    ],
    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20
            },
            {
                name: 'Ann',
                progress: 18
            }
        ],
        pro: [
            {
                name: 'Sam',
                progress: 10
            }
        ]
    }
};

function getTotalProgressByIteration(data) {
  let total = 0;  
  let students = 0;  

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
        students += course.length;
        course.forEach(student => {
            total += student.progress;
        });
    } else {
        for (let category of Object.values(course)) {
            students += category.length;
            category.forEach(student => {
                total += student.progress;
            });
        }
    }
  }

  return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        data.forEach(student => {
            total += student.progress;
        });
        return [total, data.length];
    } else {
        let total = [0, 0];

        for(let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0]; 
            total[1] += subDataArr[1]; 
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);