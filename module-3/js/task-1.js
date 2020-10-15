function task1() {
    const mood = 'happy';
    const value = 10;
    const user = {
        name: 'Mango',
        age: 20,
        hobby: 'html',
        premium: true,
    };
    user.mood = 'happy';
    user.hobby = 'skydiving';
    user.premium = false;
    const keys = Object.keys(user);
    // user[mood] = value;
    for (key of keys) {
        console.log(`${key}: ${user[key]}`);
    }
}