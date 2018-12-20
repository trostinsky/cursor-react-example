import React from 'react';
import Post from "./post";
import History from "./history";

const post1 = {
    author: {
        avatar: "https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-1/p200x200/38764140_10156619492092803_3586593735665778688_n.jpg?_nc_cat=106&_nc_ht=scontent.fiev5-1.fna&oh=f3bca9a4765e3a6a5363c6b6c446b729&oe=5C9F7255",
        name: "Игорь Кругленко"
    },
    date: "Вчера в 18:35",
    content: `Только что видел на Контрактовой бомжа со смартфоном, старика уже. В принципе тут никакой сенсации,
                видел и
                раньше бомжей с айподами, неплохими мобильными и китайскими портативными ТВ. Но бомжа с Телеграмом
                встречаю
                впервые!`
}

const post2 = {
    author: {
        avatar: "https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-1/p200x200/38764140_10156619492092803_3586593735665778688_n.jpg?_nc_cat=106&_nc_ht=scontent.fiev5-1.fna&oh=f3bca9a4765e3a6a5363c6b6c446b729&oe=5C9F7255",
        name: "Игорь Кругленко"
    },
    date: "Вчера в 18:35",
    content: `Только что видел на Контрактовой бомжа со смартфоном, старика уже. В принципе тут никакой сенсации,
                видел и
                раньше бомжей с айподами, неплохими мобильными и китайскими портативными ТВ. Но бомжа с Телеграмом
                встречаю
                впервые!`
}

const post3 = {
    author: {
        avatar: "https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-1/p160x160/20293039_1819179981726380_5425299224858583648_n.jpg?_nc_cat=108&_nc_ht=scontent.fiev5-1.fna&oh=b7716e3ac943a2c1a243abdeb53d13a7&oe=5C9056F0",
        name: "Влад Реактов"
    },
    date: "Сегодня в 18:35",
    content: `Супер мотивирующий пост!`
}

const history = {
    name: "Yulia Hudyma-Smetanska",
    time: "5 ч. назад",
    avatar: "https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-1/p160x160/30582419_2027600340850516_1792909646466383872_n.jpg?_nc_cat=101&_nc_ht=scontent.fiev5-1.fna&oh=13fb72eeebdb5b4f0cc6921237821192&oe=5CA9B3C1"
}

const App = () => {
    return (
        <div>
            <h1>Facebook better clone!</h1>
            <Post author={post1.author} date={post1.date}>
                {post1.content}
            </Post>
            <Post author={post2.author} date={post2.date}>
                {post2.content}
            </Post>
            <Post author={post3.author} date={post3.date}>
                {post3.content}
            </Post>
            <History
                name={history.name}
                time={history.time}
                avatar={history.avatar}
            />
            <iframe width="200" height="150" src="https://www.youtube.com/embed/5WnaT1oFjt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

// module.exports = App;
export default App;