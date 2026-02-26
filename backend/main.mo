import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";

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
};
