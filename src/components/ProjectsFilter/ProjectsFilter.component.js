import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react'
import { CategoriesStyles } from './ProjectsFilter.styles';

function countProjectsInCategories(projects) {
    const counts = projects
        .map(project => project.node.categories)
        .reduce((acc, category) => {
            //check if this is an existing category
            const existingCategory = acc[category.id]
            if(existingCategory) {
                //if it is increment by 1
                existingCategory.count += 1
            } else {
                //otherwise create a new entry in our acc and set it to 1
                acc[category.id] = {
                    id: category.id,
                    name: category.Category,
                    count: 1,
                }
            }
        return acc;
    }, {});
    //sorting based on the counts
    const sortedCategories = Object.values(counts).sort((a,b) => b.count -a.count);
    return sortedCategories;

}

const ProjectsFilter = ({ activeCategory }) => {
    // Get a list of all the categories
    // Get a list of all the Projects with their categories
    const {allSanityCategory, allSanityProject} = useStaticQuery(graphql`
        query MyQuery {
            allSanityCategory {
                edges {
                    node {
                        Category
                        id
                    }
                }
            }
            allSanityProject {
                edges {
                    node {
                        categories {
                        Category
                        id
                        }
                    }
                }
            }
        }
    `);
    console.clear();
    console.log({allSanityCategory})
    console.log({allSanityProject})
    //Count how many Projects is in each category
    const categoriesWithCounts = countProjectsInCategories(allSanityProject.edges)
    console.log(categoriesWithCounts)
    //loop over and display categories and the count of projects in each category
    return (
        <CategoriesStyles>
                <Link to='/projects' activeStyle={{ background: "#b86411" }}>
                    <span className='name'>All Projects</span>
                    <span className='count'>{allSanityProject.edges.length}</span>
                </Link>
            {categoriesWithCounts.map(category => (
                <Link key={category.id} to={`/category/${category.name}`} className={category.name === activeCategory ? 'active' : ''}>
                    <span className='name'>{category.name}</span>
                    <span className='count'>{category.count}</span>
                </Link>
            ))} 
        </CategoriesStyles>
    )
}

export default ProjectsFilter;
