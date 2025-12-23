import { CategoriesPage } from './CategoriesPage';
import data from '../../../../public/data/homepageData.json';
import catNavData from '../../../../public/data/categoriesNavigation.json';
import collectionstNavData from '../../../../public/data/collectionsNavigation.json';
import categoriesResults from '../../../../public/data/categoriesData.json';



export default {
    title: 'Design System/BSD/Pages/CategoriesPage',
    component: CategoriesPage,
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        showLogo: true,
        categoriesData: catNavData,
        collectionsData: collectionstNavData,
        data: data.sliceGroups[0].slices[3],
        resultsData: categoriesResults,
        editorialData: data.sliceGroups[0].slices[9]
    },
    argTypes:{
        state: {
            control:{
                type: 'select'
            },
            options: ["landing","results"]
        }
    }
};

export const Landing = {
    parameters: {},
    args: {
        state: 'landing',
    }
  };
export const Editorial = {
    parameters: {},
    args: {
        state: 'editorial',
    }
  };

