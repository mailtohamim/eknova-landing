import React from 'react';
import styles from './NutritionTable.module.css';

export default function NutritionTable() {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}>Nutrition Facts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Serving Size</td>
                        <td>1 Capsule</td>
                    </tr>
                    <tr>
                        <td>Servings Per Container</td>
                        <td>60</td>
                    </tr>
                    <tr className={styles.thickRow}>
                        <td colSpan={2}><strong>Amount Per Serving</strong></td>
                    </tr>
                    {/* Mock Data */}
                    <tr>
                        <td>Energy</td>
                        <td>2 kcal</td>
                    </tr>
                    <tr>
                        <td>Total Fat</td>
                        <td>0g</td>
                    </tr>
                    <tr>
                        <td>Carbohydrates</td>
                        <td>0.5g</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>0g</td>
                    </tr>
                </tbody>
            </table>
            <p className={styles.disclaimer}>
                * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
            </p>
        </div>
    );
}
