import React from 'react';
import { Text } from 'react-native';
const About = () => {
    return (
        <div className="about__container">
            <h1>О сайте</h1>
            <div>
                <Text>Автор: Понамарев Степан Андреевич</Text>
            </div>
            <div>
                <Text>Группа: P32151</Text>
            </div>
            <div>
                <Text>Вариант: 3121</Text>
            </div>
            <div>
                <Text>Гитхаб: <a href="https://github.com/stepagin">Stepagin</a></Text>
            </div>
        </div>
    );
};

export default About;