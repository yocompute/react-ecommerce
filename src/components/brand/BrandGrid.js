import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { setBrand } from '../../redux/brand/brand.actions'

import DefaultImage from '../../assets/Default-Image.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function BrandGrid({ data, setBrand }) {
  const classes = useStyles();
  function handleSelect(brand) {
    setBrand(brand);
  }
  const matches = useMediaQuery('(min-width:800px)');
  return (
    <div className={classes.root}>
      <GridList cellHeight={240} className={classes.gridList} cols={useMediaQuery('(min-width:800px)') ? 4 : 1}>
        {
          data && data.length > 0 &&
          data.map((tile) => (
            <Link key={tile._id}
              style={{ textDecoration: 'none' }}
              to={{ pathname: `/brands/${tile._id}` }}
              onClick={e => handleSelect(tile)} 
            >
              <GridListTile key={tile._id} className="tile-cell">
                <div>
                  <img src={tile.img ? tile.img : DefaultImage} alt={tile.name} />
                  <div className="brand-name">{tile.name}</div>
                </div>
              </GridListTile>
            </Link>
          ))}
      </GridList>
    </div>
  );
}


const mapStateToProps = state => ({
  brand: state.brand
});

export default connect(
  mapStateToProps,
  { setBrand }
)(BrandGrid);
