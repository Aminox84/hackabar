const Quiz = require('../models/quiz.models');


module.exports.getQuiz = async (req, res) => {
    // Set headers
    res.setHeader('Content-Type', 'application/json');

    // Get all entreprises from database
    const quiz = await Quiz.find().lean();

    // Return response
    res.status(200);
    res.send(JSON.stringify(quiz));
}

// module.exports.addQuiz = async (req, res) => {

//     res.setHeader('Content-Type', 'application/json');

//     const createdQuiz = new Quiz({
//         results: [
//             {
//                 question: "Comment récuperer tout les pokémons de type electrique",
//                 correct_answer: "Select * from Pokemon where type = electrique",
//                 incorrect_answers: "Get ALL from Pokemon where type = electrique",
//                 doc: "https://sql.sh/cours/select"
//             },
//             {
//                 question: "Quelle clause est utilisée pour identifie la table dresseur: Select * XXX Dresseur",
//                 correct_answer: "FROM",
//                 incorrect_answers: "WHERE",
//                 doc: "https://www.w3schools.com/sql/sql_ref_from.asp"
//             },
//             {
//                 question: "Quelle clause est utilisé pour trier les pokemons par type en SQL",
//                 correct_answer: "GROUP BY",
//                 incorrect_answers: "ORDER BY",
//                 doc: "https://sql.sh/cours/group-by"
//             },
//             {
//                 question: "Quelle clause est utilisée pour filtrer les groupes?",
//                 correct_answer: "HAVING",
//                 incorrect_answers: "WHERE",
//                 doc: "https://sql.sh/cours/having"
//             },
//             {
//                 question: "Nous récupérons un tableau présentant plusieurs pikachu comment effacer les duplicats",
//                 correct_answer: "Ajouter distinct à la requête",
//                 incorrect_answers: "Ajouter unique à la requête",
//                 doc: "https://sql.sh/cours/distinct"
//             },
//             {
//                 question: "Nous souhaitons récupérer tout les pokemons afficace contre les pokemons de type eau que faire",
//                 correct_answer: "Select * from Pokemon where type = electrique and type = plante",
//                 incorrect_answers: "Select * from Pokemon where type = [electrique, plante]",
//                 doc: "https://sql.sh/cours/where/and-or"
//             },
//             {
//                 question: "Nous souhaitons récupérer seulement le type de pikachu dans la base de données comment faire",
//                 correct_answer: "Select * from Pokemon where name = pikachu",
//                 incorrect_answers: "Select type from Pokemon where name = pikachu",
//                 doc: "https://sql.sh/cours/select"
//             },
//             {
//                 question: "Nous souhaitons ajouter un pokemon dans la base de données comment faire",
//                 correct_answer: "INSERT INTO Pokemon VALUES (Mew, gen1 , ...)",
//                 incorrect_answers: "UPDATE Pokemon SET nom = (Mew, gen1 , ...) ",
//                 doc: "https://sql.sh/cours/insert-into"
//             },
//             {
//                 question: "Commant compter tout les pokemons dans la base de données",
//                 correct_answer: "Select count(*) from Pokemon",
//                 incorrect_answers: "Count(*) from Pokemon",
//                 doc: "https://sql.sh/fonctions/agregation/count"
//             },
//             {
//                 question: "Nous souhaitons récupérer le pokemon avec le plus d'attaque que faire",
//                 correct_answer: "Select max(attaque) from Pokemon",
//                 incorrect_answers: "Select * from Pokemon where attaque = max()",
//                 doc: "https://sql.sh/fonctions/agregation/max"
//             },

//         ]
//     });

//     const createdQui = await createdQuiz.save()

// }

