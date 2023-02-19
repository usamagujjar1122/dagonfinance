const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const Deposit = require("../Models/Deposits");
const Stat = require("../Models/Stat");
const Request = require("../Models/Requests");
const Withdrawl = require("../Models/Withdrawls");
const History = require("../Models/History");
const bcrypt = require("bcrypt");
var nodemailer = require("nodemailer");
const jwt_decode = require("jwt-decode");
const { transporter } = require('../emailConfig.js');
const Msgs = require("../Models/Msgs");
// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "asadullah88889@gmail.com",
//     pass: "123ASasd",
//   },
// });

exports.signup = async (req, res) => {
  try {
    const { name, username, email, reemail, password, repass, secq, seca, btcaddress, ethaddress, usdtaddress, bnbaddress, checked, referedby } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Full Name" });
    }
    if (!username) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter User Name" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Email" });
    }
    if (email !== reemail) {
      return res
        .status(400)
        .json({ success: false, message: "Email match failed" });
    }
    if (!email.includes('@')) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter valid Email" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Password" });
    }
    if (password != repass) {
      return res
        .status(400)
        .json({ success: false, message: "Password match failed" });
    }
    if (!secq) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Secret Question" });
    }
    if (!seca) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Secret Answer" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "Password must have 8 characters" });
    }
    if (!checked) {
      return res
        .status(400)
        .json({ success: false, message: "Please agree to the terms and conditions" });
    }
    const fuser = await User.findOne({ email: email });
    if (fuser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered please login to continue",
      });
    }
    const fusername = await User.findOne({ username: username });
    if (fusername) {
      return res.status(400).json({
        success: false,
        message: "Please select any other username",
      });
    }
    const p = await bcrypt.hash(password, 12);
    const user = new User({ name, username, email, password: p, secq, seca, btcaddress, ethaddress, bnbaddress, usdtaddress, referedby, balance: 0, commision: 0,isverified:false });
    const userdata = await user.save();
    const stat = new Stat({ user: userdata, actived: 0, lastd: 0, totald: 0, pendingw: 0, lastw: 0, totalw: 0, earned: 0,commision:0 })
    await stat.save()
    setTimeout(() => {
      const token = jwt.sign({ email: email }, "JWT_SECRET");
      transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: "Welcome to DAGON FINANCE",
        html: `
            <h4>Hi, ${name}</h4>
            <p>Welcome to DAGON FINANCE. Your email is ${email}. Feel free to invest with us.</p>
            <h4>Best Regards</h4>
            <h4>DAGON FINANCE Team</h4>
            <p style="font-weight:bold;background-color:silver;">@ DAGON FINANCE 2023</p>
            `
      })
        transporter.sendMail({
          from: process.env.EMAIL,
          to: email,
          subject: "Verify Email Address",
          html: `
              <h4>Hi, ${name}</h4>
              <p>Please click the button below to verify your email address </p>
              <a href=${process.env.FRONTEND_URL}?token=${token}><button style=background-color:#87CEEB;color:white;padding:5px;border:none;border-radius:5px;cursor:pointer; >Verify Email Address</button></a>
              <h4>If you did not create an account, no further action is required</h4>
              <p style=font-weight:'bold;background-color:'silver'>@ DAGON FINANCE 2023</p>
              `
        })
      }, 5000);
    return res.status(200).json({
      success: true,
      message: "Account Created Successfully. Please Login To Continue",
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Email" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Password" });
    }
    const user = await User.findOne({ username: username });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const date = new Date().toLocaleString()
        await User.findOneAndUpdate({ username: username }, { lastaccess: date })
        const token = jwt.sign({ _id: user._id }, "JWT_SECRET");
        return res
          .status(200)
          .json({ success: true, message: "Login Success", data: user, token });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Crediantials" });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Not a registered user",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
    
};

exports.loaduser = async (req, res) => {
  const token = req.body.token;
  if (token) {
    var data = jwt_decode(token);
    try {
      const docs = await User.findById(data._id)
      if (docs) {
        res.status(200).json({ success: true, data: docs, token: token })
      } else {
        res.status(400).json({ success: false })
      }
    } catch (error) {
      console.log(error)
      res.send({ success: false, message: "failed to get user" })
    }
  }
  else {
    res.status(400).json({ success: false, message: "failed to get user" })
  }
};

exports.verify = async (req, res) => {
  const token = req.body.token;
  if (token) {
    var data = jwt_decode(token);
    try {
      await User.findOneAndUpdate({email:data.email},{isverified:true})
      res.status(200).json({ success: true, message: "Email Verified Successfully" })
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
  else {
    res.status(400).json({ success: false, message: "Invalid Attmept" })
  }
};

exports.loaduserwithid = async (req, res) => {
  const id = req.body.id;
  try {
    const docs = await User.findById(id)
    if (docs) {
      res.status(200).json({ success: true, data: docs })
    } else {
      res.status(400).json({ success: false })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.loaddeposits = async (req, res) => {
  const user = req.body.user;
  try {
    const docs = await Stat.findOne({ user: user })
    if (docs) {
      res.status(200).json({ success: true, data: docs })
    } else {
      res.status(400).json({ success: false })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.loaddepositlist = async (req, res) => {
  const user = req.body.user;
  try {
    const docs = await Deposit.find({ user: user })
    if (docs) {
      res.status(200).json({ success: true, data: docs })
    } else {
      res.status(400).json({ success: false })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.loadwithdraw = async (req, res) => {
  const user = req.body.user;
  try {
    const docs = await Withdrawl.find({ user: user._id })
    if (docs) {
      res.status(200).json({ success: true, data: docs })
    } else {
      res.status(400).json({ success: false })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getusers = async (req, res) => {
  try {
    const docs = await User.find({})
    if (docs) {
      res.status(200).json({ success: true, data: docs })
    } else {
      res.status(204).json({ success: false })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.loadreferallist = async (req, res) => {
  const user = req.body.user;
  if (user) {
    try {
      const docs = await User.find({ referedby: user.username })
      if (docs) {
        res.status(200).json({ success: true, data: docs })
      } else {
        res.status(400).json({ success: false })
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
};
exports.msg = async (req, res) => {
  const { name, email, msg } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Your Name" });
  }
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Email" });
  }
  if (!msg) {
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Message" });
  }
  try {
    const docs = new Msgs({ name, email, msg, status: 'new' })
    await docs.save()
    res.status(200).json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getmsgs = async (req, res) => {
  try {
    const docs = await Msgs.find({})
    if (docs) {
      res.status(200).json({ success: true, data: docs })
    } else {
      res.status(400).json({ success: false })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.msgstatus = async (req, res) => {
  const item = req.body.item

  try {
    const docs = await Msgs.findByIdAndUpdate(item._id, { status: 'read' })
    if (docs) {
      res.send({ "status": "success", "data": docs })
    }
    else {
      res.send({ "status": "failed", "message": "order not found" })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.getrequests = async (req, res) => {
  try {
    const docs = await Request.find({})

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getwithdraw = async (req, res) => {
  try {
    const docs = await Withdrawl.find({})

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.loadhistory = async (req, res) => {
  const user = req.body.user;
  try {
    const docs = await History.find({ user: user })
    if (docs) {
      res.status(200).json({ success: true, data: docs })
    } else {
      res.status(400).json({ success: false })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.forgot = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Email" });
    }
    const docs = await User.findOne({ email: email })
    if (docs) {
      res.status(200).json({ success: true, data: docs, message: 'Please enter your secret answer' })
    } else {
      res.status(400).json({ success: false, message: 'Email not registered' })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.approve = async (req, res) => {
  const item = req.body.item
  try {
    await User.findByIdAndUpdate(item.user._id, { $inc: { balance: +item.amount } })
    const docs = await Request.findByIdAndUpdate(item._id, { status: 'approved' })
    if (docs) {
      res.send({ "status": "success", "message": 'Approved successfully' })
    }
    else {
      res.send({ "status": "failed", "message": "order not found" })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.cancle = async (req, res) => {
  const item = req.body.item
  try {
    const docs = await Request.findByIdAndUpdate(item._id, { status: 'cancelled' })
    if (docs) {
      const history = new History({ user: item.user, type: 'Deposit Failed', amount: item.amount })
      await history.save()
      res.send({ "status": "success", "message": 'Cancelled successfully' })
    }
    else {
      res.send({ "status": "failed", "message": "order not found" })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.deletew = async (req, res) => {
  const item = req.body.item
  try {

    const docs = await Withdrawl.findByIdAndDelete(item._i)
    if (docs) {
      res.send({ "status": "success", "message": 'Deleted successfully' })
    }
    else {
      res.send({ "status": "failed", "message": "order not found" })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.completew = async (req, res) => {
  const item = req.body.item

  try {
    await Stat.findOneAndUpdate({ user: item.user }, { lastw: item.amount, $inc: { totalw: +item.amount, pendingw: -item.amount } })
    const docs = await Withdrawl.findByIdAndUpdate(item._id, { status: 'completed' })
    const user = await User.findById(item.user)
    setTimeout(() => {
      transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: "Withdraw Successful",
        html: `
            <h4>Hi, ${item.username}</h4>
            <p>Your withdraw request for $${item.amount} has been processed. </p>
            <p style=font-weight:'bold;background-color:'silver'>@ DAGON FINANCE 2023</p>
            `
      })
    }, 5000);
    if (docs) {
      res.send({ "status": "success", "message": 'Completed successfully' })
    }
    else {
      res.send({ "status": "failed", "message": "order not found" })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.canclew = async (req, res) => {
  const item = req.body.item
  try {
    await User.findByIdAndUpdate(item.user, { $inc: { balance: +item.amount } })
    const docs = await Withdrawl.findByIdAndUpdate(item._id, { status: 'cancelled' })
    const user = await User.findById(item.user)  
    const history = new History({ user: item.user, type: 'Withdraw Failed', amount: item.amount })
    await history.save()      
    if (docs) {
      setTimeout(() => {
        transporter.sendMail({
          from: process.env.EMAIL,
          to: user.email,
          subject: "Withdraw request cancelled",
          html: `
              <h4>Hi, ${item.username}</h4>
              <p>Your withdraw request for $${item.amount} has been cancelled. </p>
              <p style=font-weight:'bold;background-color:'silver'>@ DAGON FINANCE 2023</p>
              `
        })
      }, 5000);
      res.send({ "status": "success", "message": 'Cancelled successfully' })
    }
    else {
      res.send({ "status": "failed", "message": "order not found" })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.deletereq = async (req, res) => {
  const item = req.body.item
  try {

    const docs = await Request.findByIdAndDelete(item._id)
    if (docs) {
      res.send({ "status": "success", "message": 'Deleted successfully' })
    }
    else {
      res.send({ "status": "failed", "message": "order not found" })
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};


exports.reset = async (req, res) => {
  const { email, password, repass } = req.body
  if (password.length < 8) {
    return res
      .status(400)
      .json({ success: false, message: "Password must have 8 characters" });
  }
  if (password != repass) {
    return res
      .status(400)
      .json({ success: false, message: "Password match faiiled" });
  }
  try {
    const p = await bcrypt.hash(password, 12);
    const user = await User.findOneAndUpdate({ email: email }, { password: p })
    res
      .status(200)
      .json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }

}
exports.request = async (req, res) => {
  const { amount, package, method, TrxID, profit, user } = req.body
  if (!TrxID) {
    return res
      .status(400)
      .json({ success: false, message: "Please Enter TrxID" });
  }
  try {
    const data = new Request({ amount, package, method, TrxID, profit, user, status: 'pending', username: user.username })
    const saved = await data.save()
    res
      .status(200)
      .json({ success: true, message: "Request sent successfully" });

  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}


exports.withdraw = async (req, res) => {
  const { amount, method, user } = req.body
  if (!amount) {
    return res
      .status(400)
      .json({ success: false, message: "Please Enter amount" });
  }
  if (amount<10) {
    return res
      .status(400)
      .json({ success: false, message: "Minimu withdraw amount in $10" });
  }
  if (!method) {
    return res
      .status(400)
      .json({ success: false, message: "Please select a method" });
  }
  try {
    if (user.balance >= amount) {
      await User.findByIdAndUpdate(user._id, { $inc: { balance: -amount } })
      await Stat.findOneAndUpdate({ user: user }, {$inc :{pendingw: +amount} })
      const data = new Withdrawl({ user, amount, method, status: 'pending', username: user.username })
      await data.save()
      const history = new History({ user: user, type: 'Withdraw', amount: amount })
      await history.save()
      res
        .status(200)
        .json({ success: true, message: "Withdrawl request sent successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Not enough balance" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

exports.edit = async (req, res) => {
  const { user, btcaddress, ethaddress, trcaddress, bnbaddress } = req.body
  try {
    await User.findByIdAndUpdate(user._id, { btcaddress: btcaddress, ethaddress: ethaddress, trcaddress: trcaddress, bnbaddress: bnbaddress })
    res
      .status(200)
      .json({ success: true, message: "Updated Successfully" });

  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
exports.withdrawcommision = async (req, res) => {
  const { user, item } = req.body
  try {
    const refer = await User.findById(item._id)
    const commision = refer.commision
    await User.findByIdAndUpdate(item._id, { commision: 0 })
    await User.findByIdAndUpdate(user._id, { $inc: { balance: +commision } })
    await Stat.findOneAndUpdate({user:user._id}, { $inc: { commision: +commision } })
    const history = new History({ user: user, type: 'Commision', amount: commision })
    await history.save()
    res
      .status(200)
      .json({ success: true, message: "Commision withdrawn wuccessfully" });

  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.deposit = async (req, res) => {
  const { amount, package, method, TrxID, profit, user } = req.body
  const increment = await (amount / 100) * profit
  const commision = await increment / 10
  const total = amount + increment
  const time = () => {
    switch (package) {
      case '5% after 2 days':
        return 2*86400;
      case '8% after 2 days':
        return 2*86400;
      case '10% after 3 days':
        return (3*86400);
      case '15% after 1 week':
        return (7*86400);
      default:
        break;
    }
  }
  try {
    const docs = new Deposit({ user, amount, package, method, profit, TrxID, status: 'active' })
    await Stat.findOneAndUpdate({ user: user }, { $inc: { totald: +amount, actived: +amount }, lastd: amount })
    await docs.save()
    const history = new History({ user: user, type: 'Deposit', amount: amount })
    await history.save()
    const all = await Deposit.find({ user: user })
    let current
    await all.reverse().map((item, index) => {
      if (index === 0) {
        current = item
      }
    })
    const id = current._id
    setTimeout(() => {
      transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: "Deposit Confirmed",
        html: `
            <h4>Hi, ${user.name}</h4>
            <p>Your have successfully deposited $${amount}. You are currently running on a plan of ${package}.</p>
            <p>For complaints or inquires, do not hesitate to contact our 27/7 support team vai eamil</p>
            <p>${process.env.EMAIL}<p/>
            <h4>Best Regards</h4>
            <p style=font-weight:'bold;background-color:'silver'>@ DAGON FINANCE 2023</p>
            `
      })
    }, 5000);
    setTimeout(async () => {
      await Stat.findOneAndUpdate({ user: user }, { $inc: { actived: -amount, earned: +increment } })
      await User.findByIdAndUpdate(user._id, { $inc: { balance: +total, commision: +commision } })
      await Deposit.findByIdAndUpdate(id, { status: 'old' })
      const history = new History({ user: user, type: 'Earning', amount: total })
      await history.save()
      console.log(user.username + ' incremented by $' + increment + ' on deposit of $' + amount)
    }, time()
    )
    await User.findByIdAndUpdate(user._id, { $inc: { balance: -amount } })
    res
      .status(200)
      .json({ success: true, message: "Deposit saved successfully" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }

};

exports.deleteUsers = async (req, res) => {
  try{
  const selected = req.body.selected
  selected.map(async (item) => {
    console.log(item)
    await User.findOneAndDelete({ email: item });
  })
  res.status(400).json({ success: false, message: "Users deleted Successfully" })
  }
  catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};