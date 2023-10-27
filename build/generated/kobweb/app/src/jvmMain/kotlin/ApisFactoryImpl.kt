import com.varabyte.kobweb.api.Apis
import com.varabyte.kobweb.api.ApisFactory
import com.varabyte.kobweb.api.`data`.MutableData
import com.varabyte.kobweb.api.`init`.InitApiContext
import com.varabyte.kobweb.api.log.Logger

public class ApisFactoryImpl : ApisFactory {
    public override fun create(logger: Logger): Apis {
        val data = MutableData()
        val apis = Apis(data, logger)
        apis.register("/add_post") { ctx -> com.example.blogmultiplatform.api.addPost(ctx) }
        apis.register("/check_user_id") { ctx -> com.example.blogmultiplatform.api.checkUserID(ctx)
                }
        apis.register("/delete_selected_posts") { ctx ->
                com.example.blogmultiplatform.api.deleteSelectedPost(ctx) }
        apis.register("/read_my_post") { ctx -> com.example.blogmultiplatform.api.readMyPosts(ctx) }
        apis.register("/read_selected_post") { ctx ->
                com.example.blogmultiplatform.api.readSelectedPost(ctx) }
        apis.register("/search_posts") { ctx ->
                com.example.blogmultiplatform.api.searchPostsByTitle(ctx) }
        apis.register("/user_check") { ctx -> com.example.blogmultiplatform.api.userCheck(ctx) }
        val initCtx = InitApiContext(apis, data, logger)
        com.example.blogmultiplatform.data.initMongoDb(initCtx)

        return apis
    }
}
