const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cookieParser());


url = "mongodb+srv://zoumaniguiconfig2000:Renezoum@cluster0.nginbrc.mongodb.net/Authentification";

const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   // Si nécessaire, ajoutez d'autres options ici
};


(async () =>{
     try{
        await mongoose.connect(url);
        console.log("connexion reussie");
     }catch(error){
        console.log('impssible de se connecter a la base', error);
     }
})();
app.listen(3001);

app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);




