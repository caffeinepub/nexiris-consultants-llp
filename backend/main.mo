import Time "mo:core/Time";
import List "mo:core/List";
import Text "mo:core/Text";
import Nat "mo:core/Nat";



actor {
  type Inquiry = {
    name : Text;
    company : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, company : Text, email : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      company;
      email;
      message;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };

  public query ({ caller }) func exportInquiriesCsv() : async Text {
    let header = "Name,Company,Email,Message,Timestamp\n";
    let body = inquiries.values().map(
      func(inq) {
        inq.name.concat(",").concat(inq.company)
        .concat(",").concat(inq.email)
        .concat(",").concat(inq.message)
        .concat(",").concat(inq.timestamp.toNat().toText());
      }
    ).toArray();
    header # body.values().join("\n");
  };
};
