import interfaces from "../interfaces/interfaces";
declare class ProvideDoneSyntax implements interfaces.ProvideDoneSyntax {
    private _binding;
    constructor(binding: interfaces.BindConstraint);
    done(force?: boolean): (target: any) => any;
}
export default ProvideDoneSyntax;
