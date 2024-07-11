import React from 'react';
import Profile from './components/Profile';
import './blocks/profile/profile.css';

const App = () => {
    const [currentUser, setCurrentUser] = React.useState({ _id: 1, avatar: "https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png", name: "Жак-Ив Кусто", about: "Исследователь" })

    function handleUpdateAvatar(props) {
        setCurrentUser(prev => ({ ...prev, ...props }));
    }

    function handleUpdateUser(props) {
        setCurrentUser(prev => ({ ...prev, ...props }));
    }

    return (
        <div className='profile'>
            <Profile
                onUpdateAvatar={handleUpdateAvatar}
                onUpdateUser={handleUpdateUser}
                currentUser={currentUser} />
        </div>
    )
}

export default App;

