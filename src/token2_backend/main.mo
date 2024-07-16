import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor Token{

    var owner : Principal = Principal.fromText("nhgpy-cnhuo-kdcwm-5o2mp-vfq5m-vtg5e-bi66o-uxaju-hpf2k-a6zp7-aqe");
    var totalSupply : Nat = 1000000000;
    var symbol : Text = "FERG";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner,totalSupply);

    public query func balanceOf(who: Principal) : async Nat {
        let balance : Nat = switch (balances.get(who)){
            case null 0;
            case (?result) result;
        };

        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };
};
