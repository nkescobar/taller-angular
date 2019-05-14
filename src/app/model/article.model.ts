export class Article  {
    title: string;
    link: string;
    votos: number;

    constructor(title: string, link: string, votos?: number) {
        this.title = title;
        this.link = link;
        this.votos = votos || 0;
    }

    upVotes(): void {
        this.votos += 1;
    }

    downVotes(): void {
        this.votos -= 1;
    }
}
