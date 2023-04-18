//your JS code here. If required.
const student = {
	name: 'xyz'
};
function studentInfo() {
	return Object.keys(student);
}
student.__proto__.getKeys = studentInfo;
studentInfo();