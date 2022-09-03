import {Grid} from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { JoinGame } from '../../components/Poker/JoinGame/JoinGame';
import './HomePage.css';

export const HomePage = () => {
  const isJoin = useRouteMatch('/join');

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
        <Grid container item sm={12} lg={11} justify='center' alignItems='center' spacing={3}>
         
          <Grid item sm={12} lg={6}>
            <div className='HomePageContainer'>{isJoin ? <JoinGame /> : <CreateGame />}</div>
          </Grid>
        </Grid>
        <Grid container item sm={12} lg={9} justify='center' alignItems='center' spacing={3}>
          <Grid item sm={12} lg={6}>
            {/* <Slide in={true} direction='up' timeout={1000}>
              <Divider variant='middle'></Divider>
            </Slide> */}
          </Grid>
        </Grid>
        
      </Grid>
      
    </>
  );
};

export default HomePage;
