import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://greatcurryrecipes.net/about-dan-toombs-indian-food-blog/";
    let authorPhoto = "https://greatcurryrecipes.net/wp-content/uploads/2021/11/dan1.jpeg.webp";
    let authorName = "Dan Toombs";
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="cool guy" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>The Curry Guy</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Chicken Curry with Poppy</h1>
                    <p>Chicken and Poppy Seed Curry, also known as "Murgh Posto," has its origins in the eastern part of the Indian subcontinent, 
                        particularly the states of West Bengal and Bangladesh. 
                        This is a creamy and delicious curry that you can literally whip up in minutes.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}
export default RecipeDescription;