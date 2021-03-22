import React from 'react'
import {List, Grid, Menu, Image} from 'semantic-ui-react'

export default class CommentDisplay extends React.Component {
    render() {
        const showComments = () => {
            if (!!this.props.comments) {
            return this.props.comments.map(comment => {
                return (
                    <Grid>
                    <Grid.Column>
                        <Menu fluid vertical>
                        <Menu.Item>
                            <List>
                            <List.Item>
                                <List.Header style={{textAlign:"center"}}>{comment.text}</List.Header>
                                <List.Content style={{textAlign:"left"}}>
                                    <Image size="tiny" src={comment.user_image}></Image>
                                    <List.Header as='a'>{comment.username}</List.Header>
                                <List.Description as='a'>{comment.created_at} </List.Description><br></br>
                                <List.Header style={{textAlign:"center"}}></List.Header>
                                </List.Content>
                            </List.Item>
                            </List>
                        </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    </Grid>)
                
            })
        }}

        return(
            <>
            {showComments()}
            </>
        )
    }
}