import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react'


class TopicGrid extends Component{
    render(){
        return(
          <div>
              <Grid doubling columns={2}>
                  <Grid.Column>

                  </Grid.Column>
                  <Grid.Column>
                      pluto
                  </Grid.Column>
                  <Grid.Column>
                      paperino
                  </Grid.Column>
                  <Grid.Column>
                      topolino
                  </Grid.Column>
                  <Grid.Column>
                      minnie
                  </Grid.Column>
              </Grid>
          </div>
        );
    }
}

export default TopicGrid;