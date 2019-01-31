export default class HomeComponent {
    message: string;
    constructor() {
        this.message = 'Bem Vindo..';
    }

    $onInit(){
        console.log("pronto")
    }

    static Factory() {
        return {
            controller: HomeComponent,
            templateUrl: 'views/components/home.html'
        };
    }
}