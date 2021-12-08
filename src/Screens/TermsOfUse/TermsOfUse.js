import * as React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

import styles from "./TermOfUse.style";
class TermsOfUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          Title={"Terms of Use"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={[baseStyle.themeContainer, styles.innerContainer]}>
            <Text style={baseStyle.text}>
              The privacy policy is one of the most essential legal requirements
              for websites.
              {"\n"} {"\n"}
              Even if you just have a small business or a blog with no income at
              all, you might be surprised to discover that you still need a
              privacy policy.
              {"\n"} {"\n"}
              Basically, if your website collects personal data, you need a
              privacy policy that informs your users about this according to
              privacy laws in most jurisdictions, including the EU and the US.
              {"\n"} {"\n"}
              Almost all modern websites function with the use of cookies, so
              chances are high that your website is collecting personal data,
              for example for statistical, functional or marketing purposes.
              {"\n"} {"\n"}
              In this blogpost, we take a look at what constitutes a good
              privacy policy, how to make a compliant GDPR privacy policy and
              whether using a privacy policy generator is a good idea.
              {"\n"} {"\n"}
              Learn what the privacy policy is and how to get one for your
              website below. What is a privacy policy? A privacy policy is a
              document that states what personal data you collect from your
              users, why, and how you keep it private.
              {"\n"} {"\n"}
              The purpose of the privacy policy is to inform your users about
              how their data is being handled. Hence, the privacy policy should
              be accessible for your users and kept in a plain and readable
              language.
              {"\n"} {"\n"}
              Most countries have privacy laws requiring that websites
              collecting personal data have a proper privacy policy in place.
              Failure to comply can result in heavy fines and even prosecution.
              Are you based in the EU or providing services to EU citizens, you
              must have a GDPR compliant privacy policy on your domain. We will
              get into this in more detail below. What is personal data?
              Personal data is information that can identify an individual,
              either directly or when combined with other data. Names, e-mails,
              addresses, localization, IP-addresses, photos, and account
              information all are directly identifying data. Health information,
              income, religion and cultural profiles and the like is also
              personal data. Furthermore, and crucial in the present context,
              data on user behavior is also personal. Cookies can track and
              register individual users’ browsing activities, like what articles
              they scroll past and which ones they choose to click on.
            </Text>

            <MainButton
              onPress={() => this.props.navigation.goBack()}
              btnText={"Accept"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default TermsOfUse;
