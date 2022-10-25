const people = [
  {
    name: 'Ross',
    sex: 'male',
  },
  {
    name: 'Monica',
    sex: 'female',
  },
  {
    name: 'Chandler',
    sex: 'male',
  },
  {
    name: 'Phoebe',
    sex: 'female',
  },
  {
    name: 'Joey',
    sex: 'male',
  },
  {
    name: 'Rachel',
    sex: 'female',
  },
];

function toAddItemIntoArr(arr) {
  for (const key in arr) {
    const checkSex = arr[key];

    if (checkSex.sex === 'female') {
      checkSex['comment'] = 'Prety';
    } else {
      checkSex['comment'] = 'Handsome';
    }
  }
  return arr;
}

console.log(toAddItemIntoArr(people));

// or

// function toAddItemIntoArrVer2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const userProfile = arr[i];
//     if (userProfile.sex === 'female') {
//       userProfile['comment'] = 'Prety';
//       userProfile.name += ' awersome';
//     } else {
//       userProfile['comment'] = 'Handsome';
//       userProfile.name += ' nice';
//     }
//   }
//   return arr;
// }

// console.log(toAddItemIntoArrVer2(people));

// or 

// function toAddItemIntoArr(arr) {
//   const updatedPeople = [];
//   for (const key in arr) {
//     const checkSex = arr[key];

//     if (checkSex.sex === 'female') {
//       const female = {
//         name: checkSex.name,
//         sex: checkSex.sex,
//       };
//       female['comment'] = 'Prety';
//       updatedPeople.push(female);
//     } else {
//       const male = {
//         name: checkSex.name,
//         sex: checkSex.sex,
//       };
//       male['comment'] = 'Handsome';
//       updatedPeople.push(male);
//     }
//   }
//   return updatedPeople;
// }

// console.log(people);
// console.log(toAddItemIntoArr(people));
// console.log(people);
