/*

The calculation of the letter of the National Identity Document (DNI) is a process based on obtaining the rest of the integer division of the DNI number and the number 23. 
From the rest of the division, the letter is obtained by selecting it within an array of letters. 

The array of letters is: 
var letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'].

Therefore if the rest of the division is 0, the letter of the DNI is T and if the rest is 3 the letter is A. With this data, elaborate a small script that: 

Store in a variable the DNI number indicated by the user and in another variable the letter of the DNI that has been indicated. Ex: 3422189J

Firstly must be checked if the number is less than 0 or greater than 99999999. 
   If that is the case, a message is shown to the user indicating that the number provided is not valid. 
   If the number is valid, the corresponding letter is calculated according to the method explained above.

Once the letter has been calculated, it must be compared with the letter indicated by the user. 
   If they do not match, a message is displayed to the user telling him/her that the letter he/she has indicated is not correct. 
   Otherwise, a message is shown indicating that the number and letter of the DNI are correct. 

*/

function checkerDNI (dniNumber){

};