const { Router } = require("express");

const router = Router();
const controller = require("../controller/controller");

router.get("/cusemail", controller.getcusemail);
router.post("/getemail", controller.addemail);
router.post("/cuslogin", controller.addcuslogin);
router.post("/placeOrder", controller.placeOrder);
router.put("/updateTimeSchedule", controller.updateTimeSchedule);
router.get("/getCustomerById/:id", controller.getCustomerById);
router.get("/getOrderId/:id", controller.getOrderIdAtPaymentWaitingStage);
router.put("/updatePaymentConfirm/:id", controller.updatePaymentConfirm);
router.get("/customer/:id", controller.getcusinfo);
router.put("/updatecustomer/:id", controller.updatecusinfo);
router.delete("/cusdelete/:id", controller.deleteaccount);
router.get("/getcusorderhistory/:id", controller.getcusorderhistory);

router.get("/orders", controller.getOrders);
router.get("/riders", controller.getRiders);
router.get("/riders/:id", controller.getRiderById);
router.get("/fullOrders", controller.getOrdersWithCustomerAndRider);
router.get("/finishOrders", controller.getFinsihOrders);
router.delete("/rider/:id", controller.deleteRider);

router.get("/getOrderItems/:id", controller.getOrderItemsById);
router.put("/pickUpAssign/:id", controller.updatePickUpRider);
router.put("/paymentWaiting/:id", controller.updatePaymentWaiting);
router.put("/startLaundry/:id", controller.startLaundry);
router.put("/finishLaundry/:id", controller.finishLaundry);
router.put("/returnRiderAssign/:id", controller.updateReturnRider);
router.get("/time_schedule", controller.getTimeSchedule);
router.post("/createTimeSlot", controller.createTimeSlot);
router.get("/getItems", controller.getItems);
router.post("/placeOrderItems", controller.placeOrderItems);

//Riders
router.post("/rider/signup", controller.signupRider);
router.post("/rider/login", controller.LogInRider);
router.get("/riderorders/:id", controller.getRiderOrder);
router.get("/returnriderorders/:id", controller.getReturnRiderOrder);
router.get("/riderorders/orderDetail/:id", controller.getRiderOrderDetail);
router.put(
  "/riderorders/orderDetail/orderstatus/:id",
  controller.updateOrderStatus
);
router.put(
  "/riderorders/orderDetail/returnstatus/:id",
  controller.updateReturnOrderStatus
);
router.put(
  "/riderorders/orderDetail/orderstatus/orderreport/:id",
  controller.updateOrderReport
);
router.put(
  "/riderorders/orderDetail/orderstatus/returnorderreport/:id",
  controller.updateReturnOrderReport
);
router.put("/updaterider/:id", controller.updateRiderInfo);

module.exports = router;
