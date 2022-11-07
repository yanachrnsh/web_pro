const userProfile = {};

userProfile.name = 'John';
userProfile.surname = 'Smith';

userProfile.name = 'Pete';

delete userProfile.name;
console.log(userProfile);
