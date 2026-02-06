if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://cirilojunior_db_user:KFOUAeaJSwwNU2AR@blogapp.d0lncmn.mongodb.net/?appName=blogapp'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'};
}