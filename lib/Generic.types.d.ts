export type UUID = string;
export declare const NodeTypes: readonly ["start", "workflow", "delay", "end", "decision"];
export type NodeType = (typeof NodeTypes)[number];
export type Icon = string;
export type Arrival = {
    distribution: string;
    parameters: {
        rate: number;
    }[];
};
export type Duration = {
    distribution: string;
    parameters: {
        meanlog: number;
        sdlog?: number;
    }[];
};
export type Prevalence = {
    target: string;
    probability: number;
}[];
export type Metadata = {
    arrival?: Arrival;
    duration?: Duration;
    prevalence?: Prevalence;
};
export declare const GraphTypes: readonly ["pathway"];
export type GraphType = (typeof GraphTypes)[number];
export type GraphMeta = {
    id: UUID;
    name: string;
    type: GraphType;
};
