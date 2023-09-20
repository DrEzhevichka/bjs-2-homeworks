function parseCount(num) {
    let result = Number.parseFloat(num);
    if (isNaN(result)) {
       throw new Error('Невалидное значение');
    }
    return(result);
}
function validateCount (num) {
    try{
        return parseCount(num);
    } catch (eror) {
        return eror;
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.existenceTriangle();
    }
    existenceTriangle() {
        if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(area.toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c);
    } catch (eror) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}