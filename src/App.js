import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { About } from './Pages/About';
import { Contacts } from './Pages/Contacts';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Category } from './Pages/Category';
import { Recipe } from './Pages/Recipe';

function App() {
    return (
        <>
            <Router basename='/react--recipes'>
                <Header />
                <main className=' container content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/about' component={About} />
                        <Route path='/contacts' component={Contacts} />
                        <Route path='/category/:name' component={Category} />
                        <Route path='/meal/:id' component={Recipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;

//TODO1:Перед заливкой кода ОБЯЗАТЕЛЬНО поменяй все в packeg.json
//TODO2:Вставь ссылки на репозитории
