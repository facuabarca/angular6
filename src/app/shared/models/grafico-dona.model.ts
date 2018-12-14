export class GraficoDona {
    labels: string[];
    data: number[];
    type: string;
    leyenda: string;

    constructor(model) {
        if ( !model ) {
            return;
        }

        this.labels = model.labels.length > 1 ? this.labels = model.labels : [];
        this.data = model.data.length > 1 ? this.data = model.data : [];
        this.type = model.type !== '' ? this.type = model.type : '';
        this.leyenda = model.leyenda !== '' ? this.leyenda = model.leyenda : '';
    }
}
