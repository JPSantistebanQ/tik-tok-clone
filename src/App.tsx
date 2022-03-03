import './App.css';

import {Suspense} from 'react';
import {Route} from 'wouter';

import FeedVideos from './components/FeedVideos';
import Upload from './pages/Upload';

function App() {
    return (
        <div className="App">
            <main>
                <Suspense fallback={<div />}>
                    <Route path="/">
                        <FeedVideos></FeedVideos>
                    </Route>
                    <Route path="/upload">
                        <Upload />
                    </Route>
                </Suspense>
            </main>
        </div>
    );
}

export default App;
