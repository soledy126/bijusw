var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var names = ["Álbum da Família","José Silva - Avô", "Douglas Silva - Pai", "Ana Silva - Mãe", "Roberto Silva - Irmão", "Sonia Silva - Irmã"];

var age = [60, 40, 60, 30, 25, 20]

/*

Precisamos ordenadr os elementos presentes dentro da array "age" para estampar o valor da idade do respectivo membro da família.

Escreva: "age.sort()"

*/

age.sort();

/*

Precisamos reverter os elementos presentes dentro da array "age" para estampar o valor da idade dos respectivos membros da família.
Após ordenar a array "age", todos os elementos precisam ser organizados em ordem crescente, e nosso álbum de família consiste na lista oposta, na qual o primeiro membro é o avô, seguido pelo pai, assim em diante, ou seja, em ordem decrescente.

Escreva: "age.reverse()"

*/
age.reverse();

var i = 0;

function update()
{
    i++;

    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("familyMemberImage").src = updatedImage;
    
    document.getElementById("familyMemberName").innerHTML = updatedName;

    document.getElementById("familyMemberAge").innerHTML = updatedAge;


    var maxNumber = Math.max.apply(Math, age);
    console.log("A maior idade é: ", maxNumber);

    var minNumber = Math.apply(Math, age);
    console.log("A menor idade é: ", minNumber);
}