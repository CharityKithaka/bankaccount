function User(name,deposit){
 this.Name = name;
 this.InitialDeposit = deposit;
 // this.newBal =
}

User.prototype.deposit = function(amount){
	if (amount != '') {
		this.InitialDeposit = parseInt(this.InitialDeposit) + parseInt(amount);
	}

}

User.prototype.withdraw = function(amount){
	if (amount != ''){
		this.InitialDeposit = parseInt(this.InitialDeposit) - parseInt(amount);
	}
}


var RegisterAccountDiv = $("#registerAccountDiv");
	var DepositWithdrawDiv = $("#DepositWithdrawDiv");
	var nameDisplay = $("#nameDisplay");
	var amountDisplay = $("#amountDisplay");

	var newUser;

	


function onRegister(){

	var nameEntered = $("#name").val();
	var initialDepositEntered = $("#deposit").val();

	
	newUser = new User(nameEntered, initialDepositEntered);


	DepositWithdrawDiv.removeAttr('hidden');
	RegisterAccountDiv.attr('hidden','true');

	nameDisplay.html("Hello " + nameEntered);
	amountDisplay.html("Your Balance is : Ksh " + newUser.InitialDeposit);

}


function onUpdateBalance(){
	
	var depositAmountEntered = $("#amountDeposited").val();
	var withdrawAmountEntered = $("#amountWithdrawn").val();


	newUser.deposit(depositAmountEntered);
	newUser.withdraw(withdrawAmountEntered);

	
	$("#amountDeposited").val('');
	$("#amountWithdrawn").val('');

	amountDisplay.html("Your Balance is : Ksh " + newUser.InitialDeposit);
}




// Front end logic
$(document).ready(function() {
 $("#register").submit(function(event){
   event.preventDefault();
   var inputtedName = $("input#Name").val();
   var inputtedInitialDeposit = $("input#InitialDeposit").val();
 });
});

