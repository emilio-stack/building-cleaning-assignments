import React from 'react';
import styles from './list-item.module.css';


const familyNameStyle = [styles.box, styles.familyName];
const dateStyle = [styles.box, styles.date];
const assignmentStyle = [styles.box, styles.assignment];
const descriptionStyle = [styles.box, styles.description];

class Box extends React.Component {
    render() {
        return (
            <div className={this.props.boxStyle}><p>{this.props.text}</p></div>
        )
    }
}

class ListBox extends React.Component {
    render() {
        return (
            <div className={this.props.boxStyle}>{
                this.props.text.map((task) => {
                    return <p>{task}</p>
                })
            }</div>
        )
    }
}

export class ListItem extends React.Component {
    render() {
        return (
            <div className={styles.listItem}>
                <Box text={this.props.name} boxStyle={familyNameStyle.join(" ")}/>
                <Box text={this.props.date} boxStyle={dateStyle.join(" ")}/>
                <Box text={this.props.cleaningAssignment} boxStyle={assignmentStyle.join(" ")}/>
                <ListBox text={this.props.tasks} boxStyle={descriptionStyle.join(" ")}/>
            </div>
        )
    }
}

export class ListHeader extends React.Component {
    render() {
        return (
            <div className={styles.listHeader}>
                <Box text="Family" boxStyle={familyNameStyle.join(" ")}/>
                <Box text="Date" boxStyle={dateStyle.join(" ")}/>
                <Box text="Assignment" boxStyle={assignmentStyle.join(" ")}/>
                <Box text="Description" boxStyle={descriptionStyle.join(" ")}/>
            </div>
        )
    }
}