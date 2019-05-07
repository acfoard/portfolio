import React from 'react';
import Bamazon from '../assets/bamazon.jpg';
import Dbq from '../assets/dbq.jpg';
import Employee from '../assets/employee.jpg';
import Hotdog from '../assets/hotdog.png';
import Smartify from '../assets/smartify.jpg';
import Stock from '../assets/stock.jpg';
import Tiny from '../assets/tiny.jpg';
import Card from './projectCard';

class Portfolio extends React.Component {
    state = {
        projects: [
            {
                name: 'Doodle Bug Quest',
                image: {Dbq},
                url: '',
                git: '',
                description: ''
            },
            {
                name: 'SMARTify',
                image: {Smartify},
                url: '',
                git: '',
                description: ''
            },
            {
                name: 'Hotdog Spaceship',
                image: {Hotdog},
                url: '',
                git: '',
                description: ''
            },
            {
                name: 'Tiny Improvements',
                image: {Tiny},
                url: '',
                git: '',
                description: ''
            },
            {
                name: 'Employee Matcher',
                image: {Employee},
                url: '',
                git: '',
                description: ''
            },
            {
                name: 'Bamazon',
                image: {Bamazon},
                url: '',
                git: '',
                description: ''
            },
            {
                name: 'Stock Tracker',
                image: {Stock},
                url: '',
                git: '',
                description: ''
            }
        ] 
    }
render () {
    const projectList = this.state.projects
    return (
        <div>
            {projectList.map(project => <Card title={project.name} 
            image={project.image} 
            url={project.url}
            git={project.git}
            description={project.description} /> )}
        </div>
    )
}

}

export default Portfolio