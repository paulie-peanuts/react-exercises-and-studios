import styles from './Description.module.css';

export default function RecipePhoto() {
    return (
        <img src="https://greatcurryrecipes.net/wp-content/uploads/2023/06/poppy13-720x960.jpg.webp" alt="recipe photo" width="300px" className={styles.imageUpdates} />
    );
}