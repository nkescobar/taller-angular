export class Article  {
    title: string;
    link: string;
    votos: number;

    constructor(title: string, link: string, votos?: number) {
        this.title = title;
        this.link = link;
        this.votos = votos;
    }

    upVotes() {
        this.votos += 1;
    }

    downVotes() {
        this.votos -= 1;
    }
}
