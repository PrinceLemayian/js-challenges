const day = 'thursday';

switch(day) {
    case 'monday':
        console.log('Attend classes');
        console.log('Read for exams');
        break;
    case 'tuesday':
        console.log('Go to Town');
        console.log('Build my app');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Submit assignments');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!')
}