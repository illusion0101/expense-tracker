function idMaker(){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function addExpense (){
    var table = document.querySelector("#table");
    var date = document.querySelector(".input-date").value;
    var title = document.querySelector(".input-title").value;
    var amount = document.querySelector(".input-amount").value;
    var d = new Date(date);
    var id = idMaker();
    
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec="];
    var newDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}` ;
    var part = `("${id}")`;

    table.innerHTML += `<tr class="${id}" id="tr">
        <td><img src="https://avatars.dicebear.com/api/jdenticon/${title}.png"></td>
        <td>${newDate}</td>
        <td>${title}</td>
        <td class="tr-cost">${amount}</td>
        <td><a href="javascript:deleteExpense('${id}');"><i class="fa-solid fa-trash-can"></i></a></td>
    </tr>`;
    document.querySelector(".input-date").value = "";
    document.querySelector(".input-title").value = "";
    document.querySelector(".input-amount").value = "";

    updateStats();
}

function deleteExpense(id){
    id = String(id);
    row = document.querySelector(`.${id}`);
    
    row.remove();

    updateStats();
}

function updateStats(){
    var totalExpense = document.querySelector("#total-expense");
    var expenseCount = document.querySelector("#expense-count");
    var expenses = document.getElementsByClassName("tr-cost");
    var total = 0;

    for(let i = 0; i < expenses.length; i++){
        total += Number(expenses[i].innerText);
    }

    totalExpense.innerText = `Total Expense: ${total}`;
    expenseCount.innerText = `Expense Count: ${expenses.length}`;
}