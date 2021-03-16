import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import PhotoWall from '../photoWall';
import AddPhoto from '../addPhoto';
import Single from '../single';

function Main(props) {

    useEffect(() => {
        
    });

    return (
        <section>
            <h1>
                <Link to="/">Photowall</Link>
            </h1>
            <Route path="/" exact render={() => (
                <div>
                    <PhotoWall {...props} />
                </div>
            )} />
            <Route path="/addPhoto" render={({ history }) => (
                <AddPhoto {...props} />
            )} />
            <Route path="/single/:id" render={(params) => (
                <Single {...props} {...params} />
            )} />
        </section>
    );
}

export default Main;