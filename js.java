function calculateAverage(name, IPI, IMI, OOP, EDP, HC2) {
    var name = document.getElementById('name').value;
    var IPI = document.getElemtById('IPI').value;
    var IMI = document.getElementById('IMI').value;
    var OOP = document.getElementById('OOP').value;
    var EDP = document.getElementById('EDP').value;
    var HC2 = document.getElementById('HC2').value;

    var totalGrades = Number(IPI) + Number(IMI) + Number(OOP) + Number(EDP) + Number(HC2);
    var average = totalGrades / 5;

    alert("HEllo")

}